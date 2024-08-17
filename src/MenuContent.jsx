function MenuContent(prop) {
    return (
        <>
            <br />
            <h4>{prop.title}</h4>
            <p className="w3-text-grey">
              {prop.content}
            </p>
        </>
    );
}

export default MenuContent;