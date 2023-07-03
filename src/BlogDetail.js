import {useParams} from 'react-router-dom'
export default function BlogDetail(){
    const params = useParams()
    return (
        <>
            <h1>Blog Detail</h1>
            <p>Ini adalah halaman detail {params.slug}</p>
        </>
    )
}