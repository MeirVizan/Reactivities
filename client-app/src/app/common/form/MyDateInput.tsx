import { useField } from 'formik';
import { Form, Label } from 'semantic-ui-react';
import DatePicker, { DatePickerProps } from 'react-datepicker';

interface Props {
    name: string;
    placeholder: string;
    label?: string;
    showTimeSelect: boolean;
    timeCaption: string;
    dateFormat: string;
    type?: string;
}

export default function MyDateInput(props: Props) {

    const [field, meta, helpers] = useField(props.name!);
    console.log('field, meta, helpers :>> ', field, meta, helpers);


    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <DatePicker
                {...field}
                {...props}
                selected={(field.value && new Date(field.value)) || null}
                onChange={value => helpers.setValue(value)}

            />
            {meta.touched && meta.error  ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
        </Form.Field>

    )
}
