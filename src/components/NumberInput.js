import { useCallback } from "react"

export const NumberInput = (props) => {
    const { value, label, name, onChange, onLangChange, ...restProps } = props

    // Handle change number
    const handleChange = useCallback((event) => {
        onChange(event.target.value)
    }, [onChange])
    
    // Handle change language
    const handleLangChange = useCallback((event) => {
        onLangChange(event.target.value)
    }, [onLangChange])

    return (
        <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="language" className="sr-only">
                        Language
                    </label>
                    <select
                        id="lang"
                        name="lang"
                        onChange={handleLangChange}
                        className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-2 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                    >
                        <option value="en">EN</option>
                        <option value="id">ID</option>
                    </select>
                </div>
                <input
                    {...restProps}
                    id={name}
                    name={name}
                    type="number"
                    autoComplete={"off"}
                    required
                    value={value}
                    onChange={handleChange}
                    onKeyUp={handleChange}
                    className="appearance-none block w-full px-3 pl-16 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
        </div>
    )
}

export default NumberInput