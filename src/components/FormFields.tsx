import React from 'react';
import { cn } from '../utils/cn';

interface BaseFieldProps {
  label: string;
  required?: boolean;
  className?: string;
  containerClassName?: string;
}

interface InputProps extends BaseFieldProps, React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}
interface TextAreaProps extends BaseFieldProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}
interface SelectProps extends BaseFieldProps, React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: { value: string; label: string }[];
}

const fieldStyles = "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors backdrop-blur-sm";
const labelStyles = "block text-sm font-medium mb-2 text-gray-200";

export const Input = React.memo<InputProps>(({ 
  label, 
  name, 
  required = false, 
  className, 
  containerClassName,
  ...props 
}) => (
  <div className={containerClassName}>
    <label htmlFor={name} className={labelStyles}>
      {label} {required && <span className="text-primary">*</span>}
    </label>
    <input
      id={name}
      name={name}
      required={required}
      className={cn(fieldStyles, className)}
      {...props}
    />
  </div>
));

export const TextArea = React.memo<TextAreaProps>(({ 
  label, 
  name, 
  required = false, 
  className, 
  containerClassName,
  ...props 
}) => (
  <div className={containerClassName}>
    <label htmlFor={name} className={labelStyles}>
      {label} {required && <span className="text-primary">*</span>}
    </label>
    <textarea
      id={name}
      name={name}
      required={required}
      className={cn(fieldStyles, className)}
      {...props}
    />
  </div>
));

export const Select = React.memo<SelectProps>(({ 
  label, 
  name, 
  required = false, 
  options,
  className, 
  containerClassName,
  ...props 
}) => (
  <div className={containerClassName}>
    <label htmlFor={name} className={labelStyles}>
      {label} {required && <span className="text-primary">*</span>}
    </label>
    <select
      id={name}
      name={name}
      required={required}
      className={cn(fieldStyles, className)}
      {...props}
    >
      {options.map(option => (
        <option key={option.value} value={option.value} className="bg-gray-800">
          {option.label}
        </option>
      ))}
    </select>
  </div>
));

Input.displayName = 'Input';
TextArea.displayName = 'TextArea';
Select.displayName = 'Select';