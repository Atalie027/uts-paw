import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, expect, test, vi } from 'vitest'
import App from './App.jsx'

const DATA = [
  { id: '1', judul: 'Warung Uji Satu', kategori: 'Nasi', alamat: 'Jl. Uji No.1', hargaRataRata: 15000, jamBuka: '10.00-21.00' },
  { id: '2', judul: 'Kedai Uji Dua', kategori: 'Minuman', alamat: 'Jl. Uji No.2', hargaRataRata: 8000, jamBuka: '09.00-20.00' },
]

beforeEach(() => {
  localStorage.clear()
  vi.stubGlobal('fetch', vi.fn(async () => new Response(JSON.stringify(DATA))))
})

function buka(path) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

test('menampilkan data hasil fetch di halaman koleksi', async () => {
  buka('/koleksi')
  expect(await screen.findByText('Warung Uji Satu')).toBeInTheDocument()
})

test('form menolak judul kosong', async () => {
  buka('/tambah')
  await userEvent.click(screen.getByRole('button', { name: 'Simpan' }))
  expect(screen.getByRole('alert')).toHaveTextContent('Judul wajib diisi')
})

test('halaman tentang menampilkan NIM', async () => {
  buka('/tentang')
  expect(screen.getByText('123140027')).toBeInTheDocument()
})

test('halaman detail menampilkan label alamat', async () => {
  buka('/koleksi/1')
  expect(await screen.findByText('Alamat')).toBeInTheDocument()
})