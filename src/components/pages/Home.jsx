import {useState, useEffect} from 'react';
import { getAllCategories } from '../../api';

export default function Home() {
    const [catalog, setCatalog] = useState([])
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}
