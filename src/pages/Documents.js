import React, { useState, useCallback, useEffect } from 'react'
import { useHttp } from '../hooks/http.hook'
import { DataGrid } from '@material-ui/data-grid'

export default function Documents() {
  const [docs, setDocs] = useState([])
  const { request } = useHttp()

  const fetchLinks = useCallback(async () => {
    try {
      const { rows } = await request('/api/docs', 'GET', null)
      setDocs(
        rows.map(({ id, name, document }) => {
          return {
            id,
            name,
            document,
          }
        })
      )
    } catch (e) {}
  }, [request])
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Название', width: 300 },
    { field: 'document', headerName: 'Файл', width: 300 },
  ]

  const downloader = (e) => {
    fetch(`/${e.value}`)
      .then((response) => response.blob())
      .then((blob) => {
        var url = window.URL.createObjectURL(blob)
        var a = document.createElement('a')
        a.href = url
        a.download = e.value
        document.body.appendChild(a) // we need to append the element to the dom -> otherwise it will not work in firefox
        a.click()
        a.remove() //afterwards we remove the element again
      })
  }

  useEffect(() => {
    fetchLinks()
  }, [fetchLinks])
  return (
    <div style={{ height: 400, margin: 'auto', width: '70%', marginTop: 100 }}>
      <DataGrid
        rows={docs}
        columns={columns}
        pageSize={5}
        checkboxSelection
        onCellDoubleClick={downloader}
      />
    </div>
  )
}
