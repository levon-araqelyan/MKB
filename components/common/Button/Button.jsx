import Button from 'react-bootstrap/Button'
import styled from "styled-components";
import styles from './Button.module.scss';



export default function ButtonDefault({title, onClick, type='secondary', className}) {
    
    return (
        <Button
        className={className}
        variant={type} 
        onClick={onClick}>{title}</Button>
    );
};