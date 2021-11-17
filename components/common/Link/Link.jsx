import Nav from 'react-bootstrap/Nav'
import styled from "styled-components";
import styles from './Link.module.scss';

// const CostomButton = styled(Button)`
//             background: #DD0A34;
//             border-radius: 4px;
//             padding: 6px 12px;
//       `;


export default function LinkDefault({ title, onSelect, type = 'link' }) {

    return (
        
        <Nav
            activeKey="/home"
            onSelect={onSelect}
        >
            <Nav.Item>
                <Nav.Link  eventKey="link-1" className={styles.linkWropper}>{title}</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};