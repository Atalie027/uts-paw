import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import FieldInput from '../components/FieldInput.jsx'
import './Tambah.css'

const AWAL = { judul: '', kategori: 'Nasi', alamat: '', hargaRataRata: '', jamBuka: '' }

export default function Tambah() {
    const { tambah } = useKoleksi()
    const navigate = useNavigate()
    const [form, setForm] = useState(AWAL)
    const [galat, setGalat] = useState('')

    const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const simpan = (e) => {
        e.preventDefault()
        if (form.judul.trim().length < 3) {
            setGalat('Judul wajib diisi, minimal 3 karakter.')
            return
        }
        tambah({ ...form, judul: form.judul.trim(), hargaRataRata: Number(form.hargaRataRata) })
        navigate('/koleksi')
    }

    return (
        <form className="formulir" onSubmit={simpan} noValidate>
            <h1>Tambah Tempat Makan</h1>

            <FieldInput nama="judul" label="Judul" nilai={form.judul} onUbah={ubah} />
            {galat && <p role="alert">{galat}</p>}

            <label htmlFor="kategori">Kategori</label>
            <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
                <option>Nasi</option>
                <option>Mie Bakso</option>
                <option>Minuman</option>
                <option>Jajanan</option>
            </select>

            <FieldInput nama="alamat" label="Alamat" nilai={form.alamat} onUbah={ubah} />
            <FieldInput nama="hargaRataRata" label="Harga Rata-rata (Rp)" tipe="number" nilai={form.hargaRataRata} onUbah={ubah}/>
            <FieldInput nama="jamBuka" label="Jam Buka" nilai={form.jamBuka} onUbah={ubah} />

            <button type="submit">Simpan</button>
        </form>
    )
}

