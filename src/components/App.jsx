import React from "react";
import Card from "./Card";
import contacts from './contact';

function createCard(contacts) {
    return (
        <Card
            id={contacts.id}
            key={contacts.id}
            name={contacts.name}
            img={contacts.imgUrl}
            tell={contacts.phone}
            email={contacts.email}
        />
    )
}

function App() {
    return (
        <div>
        {contacts.map(createCard)}
        </div>
    );
}

export default App;