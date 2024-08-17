function Menu(prop) {
    return (
        <a href={prop.link} className="w3-bar-item w3-button">
            {prop.item}
        </a>
    );
}

export default Menu;