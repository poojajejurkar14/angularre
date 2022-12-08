// import { Directive, Input } from "@angular/core";
// import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";
// @Directive({
//     selector:'[appConfirmValidation]',
//     providers:[{
//         NG_VALIDATORS,
//         useExisting:confirmValidation,
//         multi:true
//     }]
// })
// export class confirmValidation implements Validator{
//     @Input()appConfirmValidation:string;
//     validate(control: AbstractControl): {[key:string]:any}|null{
//         const controlToCompare=control.parent.get(this.appConfirmValidation);
//         if(controlToCompare && controlToCompare.value!==control.value){
//             return{'notEqual':true};
//         }
//         return null;
//     }
// }