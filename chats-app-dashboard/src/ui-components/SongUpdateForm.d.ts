/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Song } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SongUpdateFormInputValues = {
    name?: string;
    imageUri?: string;
};
export declare type SongUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    imageUri?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SongUpdateFormOverridesProps = {
    SongUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    imageUri?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SongUpdateFormProps = React.PropsWithChildren<{
    overrides?: SongUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    song?: Song;
    onSubmit?: (fields: SongUpdateFormInputValues) => SongUpdateFormInputValues;
    onSuccess?: (fields: SongUpdateFormInputValues) => void;
    onError?: (fields: SongUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SongUpdateFormInputValues) => SongUpdateFormInputValues;
    onValidate?: SongUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SongUpdateForm(props: SongUpdateFormProps): React.ReactElement;