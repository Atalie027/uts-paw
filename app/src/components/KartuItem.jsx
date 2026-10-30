import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
    const { id, judul, kategori, alamat, hargaRataRata, jamBuka } = item
    return (
        <article className="kartu">
            <h3>
                <Link to={`/koleksi/${id}`}>{judul}</Link>
            </h3>
            <p>
                {kategori} · {alamat}
            </p>
            <p>
                RP {hargaRataRata} . buka {jamBuka}
            </p>
        </article>
    )
}
