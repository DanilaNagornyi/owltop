import {DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes} from "react";

export interface TextAriaTypes extends DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> {
  type?: 'text' | 'textarea' | 'password' | 'number';

}

export interface InputTextTypes extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type?: 'text' | 'textarea' | 'password' | 'number';
}
