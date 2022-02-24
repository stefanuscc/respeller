export const SpellContainer = (props) => {
    const { value, label, name, ...restProps } = props

    return (
        <div>
            <label htmlFor="spelling" className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="mt-1">
                <textarea
                    {...restProps}
                    id={name}
                    name={name}
                    type={name}
                    value={value}
                    readOnly={true}
                    autoComplete="current-spelling"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
            </div>
        </div>
    )
}

export default SpellContainer

