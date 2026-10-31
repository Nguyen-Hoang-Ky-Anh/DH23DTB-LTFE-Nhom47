interface CategoryCardProps {
    title: string;
    categoryItems: string[];
}

export default function CategoryMegaMenuCard({ title, categoryItems }: CategoryCardProps) {
    return (
        <div className="card border-0" style={{width: '10rem', height: '10rem', backgroundColor: "#FAFAFA"}}>
            <div className="card-title text-start fw-bold mb-0" style={{borderBottom: "1px solid #0959ab", width: "fit-content"}}>{title}</div>
            <div className="card-text text-start d-flex flex-column">
                {categoryItems.map((item, index) => (
                    <a className="category-item mt-2" style={{fontSize: "14px"}} href="#" key={index}>{item}</a>
                    ))}
            </div>
        </div>
    )
}