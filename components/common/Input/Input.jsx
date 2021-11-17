import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { FormLabel } from "react-bootstrap";
import styles from './Input.module.scss'

export default function InputDefault({title, placeholder, className}) {

    return(

        <div className={className}>
        <FormLabel className={styles.inputLabel}>{title}</FormLabel>
        <InputGroup>
        <FormControl
          placeholder={placeholder}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      </div>
    );

};