export default async function ProductPage({params}: any) {
    const product = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`).then(res => res.json())
    return (
        <div>
            <h1>{product.name}</h1>
            <p>Status: {product.status}</p>
            <p>species: {product.species}</p>
        </div>
    )
}