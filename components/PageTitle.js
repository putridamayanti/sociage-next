export default function PageTitle(props) {
    const { title, action } = props;

    return (
        <div className="w-full mb-10 flex justify-between">
            <div>
                <h1 className="text-4xl font-semibold">{title}</h1>
            </div>
            <div>
                {action}
            </div>
        </div>
    )
}