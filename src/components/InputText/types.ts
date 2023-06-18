import {DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes} from "react";
import {FieldError} from "react-hook-form";

export interface TextAriaTypes extends DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> {
  type?: 'textarea';
  error?: FieldError;
}

export interface InputTextTypes extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type?: 'text' | 'password' | 'number';
  error?: FieldError;
}
