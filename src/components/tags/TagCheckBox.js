export const TagCheckBox = ({tag}) => {
    return <div>
        <label>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
            />
            My Value
            </label>
         </div>
}