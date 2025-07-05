type LoaderProps  = {
    page?: string;
};

export function Loader({page = ""}: LoaderProps) {
    return (
        <h1 className="text-center mt-10">ЗАВАНТАЖЕННЯ {page}.... </h1>
    )
}