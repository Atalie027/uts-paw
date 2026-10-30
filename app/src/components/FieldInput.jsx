export default function FieldInput({ nama, label, nilai, onUbah, tipe = 'text' }) {
    return (
        <>
        <label htmlFor={nama}>{label}</label>
        <input id={nama} name={nama} type={tipe} value={nilai} onChange={onUbah} />
        </>
    )
}