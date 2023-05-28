import {DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes} from "react";

export interface TextAriaTypes extends DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> {
  type?: 'textarea';

}

export interface InputTextTypes extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type?: 'text' | 'password' | 'number';
}
