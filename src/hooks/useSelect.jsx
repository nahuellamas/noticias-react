import {useState} from 'react';

const useSelect = (initialState, options) => {
    const [state, setState] = useState(initialState);
    const SelectNoticias = () => {
        return(
            <select value={state} onChange={e => setState(e.target.value)} className="browser-default">
                {options.map(option => 
                    <option key={option.value} value={option.value}>{option.label}</option>
                )}
            </select>
        )
    };
    return [state, SelectNoticias]; 
}
 
export default useSelect;