import valodator from 'validator';
import { Component } from 'react';
class ValidateFields extends Component{
    validateUsername(username){
        if(valodator.isEmpty(username)){
            return 'กรุณากรอกเลขบัตรประชาชน';
        }else if(!valodator.isLength(username,{min:13,max:13})){
            return 'กรุณาใส่เลขบัตรประชาชนให้ครบ 13 หลัก';
        }
        return false;
    }
}