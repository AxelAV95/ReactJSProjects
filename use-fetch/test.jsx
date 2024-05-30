import UseFetch from ".";

export default function UseFetchHookTest() {
    const { data, error, pending } = UseFetch(
        "https://dummyjson.com/products",
        {}
    );

    return (
        <div>
            <h1>Use Fetch Hook</h1>
            {pending ? <h3>Pending ! Please wait</h3> : null}
            {error ? <h3>{error}</h3> : null}
            {data && data.products && data.products.length
                ? data.products.map((productItem) => (
                    <p key={productItem.id}>{productItem.title}</p>
                ))
                : null}
        </div>
    );
}