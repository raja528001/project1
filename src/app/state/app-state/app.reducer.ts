import * as frmAction from './app.action';

export interface AppState {
    users: any;
    names: any;
    loginDetails: any;
    imageDetails: any;
}


export const initialAppState: AppState = {
    users : [ 
        {emailId : 'abc@media.com', password:'abc123'}
        ,{emailId : 'def@media.com',password:'def123'}
    ],
    names : ['Raja Kumaran', 'TamilSelvan', 'vijay', 'ajith', 'dinesh'],
    loginDetails: {},
    imageDetails: [{path: 'assets/img1.jpg', owner: 'Raja Kumaran', premium: false, notes: 'This image is taken by raj in forest with wide angle'},
        {path: 'assets/img2.jpg', owner: 'TamilSelvan', premium: false, notes: 'This image is taken by tamil in forest with wide angle, water drops in a leaf'},{path: 'assets/img3.jpg', owner: 'dinesh', premium: false, notes: 'This image is taken by dinesh in forest with wide angle'},{path: 'assets/img4.jpg', owner: 'Raja Kumaran', premium: false, notes: 'This image is taken by raj in forest with wide angle'},
        {path: 'assets/img5.jpg', owner: 'vijay', premium: false, notes: 'This image is taken by vijay in forest with wide angle'},{path: 'assets/img6.jpg', owner: 'ajith', premium: false, notes: 'This image is taken by ajith in forest with wide angle'},{path: 'assets/image1.jpg', owner: 'Raja Kumaran', premium: true, notes: 'This image is taken by raj in forest with narrorw angle'},
        {path: 'assets/image2.jpg', owner: 'Raja Kumaran', premium: true, notes: 'This image is taken by raj in forest with narrorw angle'},
        {path: 'assets/image3.jpg', owner: 'TamilSelvan', premium: true, notes: 'This image is taken by raj in forest with narrorw angle'},
        {path: 'assets/image4.jpg', owner: 'dinesh', premium: true, notes: 'This image is taken by raj in forest with narrorw angle'},
        {path: 'assets/image5.jpg', owner: 'TamilSelvan', premium: true, notes: 'This image is taken by raj in forest with narrorw angle'},
        {path: 'assets/image6.jpg', owner: 'Raja Kumaran', premium: true, notes: 'This image is taken by raj in forest with narrorw angle'},
        {path: 'assets/image7.jpg', owner: 'vijay', premium: true, notes: 'This image is taken by raj in forest with narrorw angle'}]
};
export function AppReducer(state = initialAppState, action: frmAction.Actions) {
    switch (action.type) {
        case frmAction.LOGIN: {
            return {
                ...state,
                loginDetails: action.reqData
            };
        }
        case frmAction.IMAGE_UPDATE: {
            return {
                ...state,
                imageDetails: action.images
            };
        }
        case frmAction.IMAGE_UPDATE_INITIAL_STATE: {
            return {
                ...state,
                imageDetails: initialAppState.imageDetails
            };
        }
        default: {
            return state;
        }
    }
}
