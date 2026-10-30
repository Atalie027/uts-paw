import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
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

            <label htmlFor="judul">Judul</label>
            <input id="judul" name="judul" value={form.judul} onChange={ubah} />
            {galat && <p role="alert">{galat}</p>}

            <label htmlFor="kategori">Kategori</label>
            <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
                <option>Nasi</option>
                <option>Mie Bakso</option>
                <option>Minuman</option>
                <option>Jajanan</option>
            </select>

            <label htmlFor="alamat">Alamat</label>
            <input id="alamat" name="alamat" value={form.alamat} onChange={ubah} />

            <label htmlFor="hargaRataRata">Harga Rata-rata (Rp)</label>
            <input id="hargaRataRata" name="hargaRataRata" type="number" value={form.hargaRataRata} onChange={ubah} />

            <label htmlFor="jamBuka">Jam Buka</label>
            <input id="jamBuka" name="jamBuka" value={form.jamBuka} onChange={ubah} />

            <button type="submit">Simpan</button>
        </form>
    )
}

