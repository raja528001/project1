import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, of } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { startWith, switchMap } from 'rxjs/operators';
import { AppSelectorService } from '../state/app-state/app.selector.service';
import { Router } from '@angular/router';
import { initialAppState } from '../state/app-state/app.reducer';



@Component({
    selector: 'app-name-tag',
    templateUrl: './name-tag.component.html',
    styleUrls: ['./name-tag.component.scss']
})
export class NameTagComponent implements OnInit {
    selectable = true;
    removable = true;
    separatorKeysCodes: number[] = [ENTER, COMMA];
    nameCtrl = new FormControl();
    filteredNames: Observable<string[]>;
    names: string[] = [];
    path = 'assets/img1.jpg';
    images$: Observable<any>;

    @ViewChild('nameInput')
    nameInput!: ElementRef<HTMLInputElement>;

    constructor(private appSelecSvc: AppSelectorService, private router: Router) {
        this.filteredNames = this.nameCtrl.valueChanges.pipe(
            startWith(null),
            switchMap((name: string | null) => {
                if (name?.startsWith('@')) {
                    return this.appSelecSvc.filterNames(name);
                } else {
                    return of([]);
                }
            })
        );
        this.images$ = this.appSelecSvc.getImages();
    }

    ngOnInit(): void {
    }

    add(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();
        if (value) {
            if (this.names.indexOf(value) === -1) {
                this.names.push(value);
            }
        }
        event.chipInput!.clear();
        this.nameCtrl.setValue(null);
    }

    remove(name: string): void {
        const index = this.names.indexOf(name);
        if (index >= 0) {
            this.names.splice(index, 1);
        }
        this.filterbyOwners();
    }

    selected(event: MatAutocompleteSelectedEvent): void {
        if (event.option && event.option.viewValue && (this.names.indexOf(event.option.viewValue) === -1)) {
            this.names.push(event.option.viewValue);
        }
        this.filterbyOwners();
        this.nameInput.nativeElement.value = '';
        this.nameCtrl.setValue(null);
    }

    download(path:any) {
        window.open(path);
    }

    filterbyOwners() {
        let filterImages:any[] = [];
        const images = initialAppState && initialAppState.imageDetails ? initialAppState.imageDetails : [];
        this.names.map(name => {
            images.map((img:any) => {
                if(img && img.owner === name) { 
                    filterImages.push(img);
                }
            });
        })
        if (!filterImages.length) {
            this.appSelecSvc.dispatchUpdateImagesInitialStateAction();
        } else {
            this.appSelecSvc.dispatchUpdateImagesAction(filterImages);
        }
    }

    signout() {
        this.appSelecSvc.dispatchSignOffAction();
    }

}

