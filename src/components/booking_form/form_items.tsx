import React, {InputHTMLAttributes, SelectHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  placeholder: string;
  register: any;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  register: any
}

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  defaultValue: string;
  register: any;
}

const Form = ({ children, ...props }: any) => (
  <form {...props} className="flex flex-col max-w-screen-sm">
    {children}
  </form>
);

const FormPart = ({ children }: any) => (
  <div className="flex flex-col mb-6">{children}</div>
);

const Label = ({ text, ...props }: any) => (
  <label
    {...props}
    className="text-sm text-secondary font-sans font-medium uppercase tracking-wide dark:text-gray-400"
  >
    {text}
  </label>
);

const Input: React.FC<InputProps> = ({ id, type, placeholder, register }: any) => (
  <input
    id={id}
    type={type}
    placeholder={placeholder}
    {...register}
    className="font-sans text-default bg-white border border-gray-300 rounded-lg appearance-none h-16 p-2 px-4 invalid:border-red dark:bg-black-900 dark:border-black-600 dark:text-white dark:placeholder-shown:text-gray-400"
  />
);

const Select: React.FC<SelectProps> = ({ id, register, children }: any) => (
  <div className="relative flex">
    <select
     id={id}
     {...register}
      className="relative w-full font-sans text-default bg-white border border-gray-300 rounded-lg appearance-none h-16 p-2 px-4 dark:bg-black-900 dark:border-black-600 dark:text-white dark:placeholder-shown:text-gray-400"
    >
      {children}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
      <svg
        className="fill-current h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  </div>
);

const CheckboxWrapper = ({children}: any) => (
   <div className="flex flex-wrap gap-4">{children}</div>
)

const CheckboxItem = ({children, text, ...props}: any) => (
   <label {...props} className="relative z-1 p-2 pl-10 leading-6 bg-gray-100 rounded-md text-headline text-gray-600 cursor-pointer hover:bg-primaryLight dark:bg-black-800 dark:text-gray-300">
      {children}
      <Checkbox />
      {text}
   </label>
)

const HiddenInput: React.FC<CheckboxProps> = ({ id, defaultValue, register }: any) => (
   <input type="checkbox" className="sr-only peer" id={id} defaultValue={defaultValue} {...register}  />
)

const Checkbox = () => (
   <>
      <span className="absolute left-2 top-2 w-6 h-6 rounded-md border border-gray-400 peer-checked:bg-primary peer-checked:border-primary"></span>
      <span className="absolute left-4 top-[6px] w-2 h-4 rotate-45 border-white border-2 border-t-0 border-l-0 hidden peer-checked:block"></span>
   </>
)

const SubmitButton = ({ value, ...props }: any) => (
  <input type="submit" value={value} {...props} className="inline-block p-6 text-default uppercase tracking-wide rounded-lg bg-primary text-white cursor-pointer hover:bg-secondary transition-all"/>
);

const FormError = ({message}: any) => (
  <p className="text-headline leading-none text-red mt-2"> <i className="ri-error-warning-line text-base align-middle"></i> {message}</p>
)

export { Form, FormPart, Label, Input, Select, SubmitButton, CheckboxWrapper, CheckboxItem, HiddenInput, FormError};
