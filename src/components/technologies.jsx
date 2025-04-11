import { useState } from 'react';
import Languages from '../components/languages.jsx';
import './technologies.css';

export default function Technologies() {
    const masteredList = [
        { img: "/python.png", name: "Python", time: "2 years", text: "Variables, functions, loops, conditionals, lists, dictionaries, object-oriented programming (OOP), file handling, APIs, modules, libraries.", url: "https://www.python.org" },
        { img: "/react.png", name: "React", time: "2 years", text: "Components, JSX, props, state, hooks, useState, event handling, routing, context API, functional components.", url: "https://reactjs.org" },
        { img: "/js.png", name: "Javascript", time: "2 years", text: "Variables, functions, loops, arrays, objects, DOM manipulation, events, APIs, async/await, promises.", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { img: "/html.png", name: "HTML", time: "2 years", text: "Tables, forms, lists, links, images, multimedia elements, semantic structure, forms with validation, accessibility.", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    ];
    
    const learningList = [
        { img: "/ts.png", name: "TypeScript", time: "1 years", text: "Types, interfaces, functions, classes, type annotations, generics, type inference, strict typing, code scalability", url: "https://www.typescriptlang.org/docs/" },
        { img: "/css.png", name: "CSS", time: "2 years", text: "Selectors, properties, animations, transitions, responsiveness, media queries, pseudo-classes", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { img: "/mysql.png", name: "MySQL", time: "Less than 1 year.", text: "Databases, tables, queries, joins, indexes, CRUD operations.", url: "https://www.mysql.com" },
        { img: "/node.png", name: "Node", time: "Less than 1 year.", text: "Modules, Express, routing, APIs, asynchronous programming.", url: "https://nodejs.org" },
        { img: "/astro.png", name: "Astro", time: "Less than 1 year.", text: "Components, JSX, rendering, static site generation, integrations, markdown, server-side rendering, partial hydration.", url: "https://astro.build" },
        { img: "/c.png", name: "C", time: "Less than 1 year.", text: "Variables, functions, loops, conditionals, pointers, memory management, structs, arrays.", url: "https://en.cppreference.com/w/c" },
    ];
    
    const tools = [
        { img: "/github.png", name: "Git", time: "Less than 1 year.", text: "Version control, branches, commits, merges, rebases, remote repositories, conflict resolution.", url: "https://git-scm.com" },
        { img: "/git.png", name: "GitHub", time: "Less than 1 year.", text: "Repositories, cloning, pull requests, branches, forks, merging, issues, actions, collaboration.", url: "https://github.com" },
    ];
    

    const [activeList, setActiveList] = useState("mastered");

    const handleListChange = (type) => {
        setActiveList(type); 
    };

    const getListToRender = () => {
        return activeList === "mastered" ? masteredList : activeList === "learning" ? learningList : tools;
    };

    return (
        <section id='technologies' className="content1">
            <div className="position" ></div>
            <div>
                <ul className="classification-ul1">
                    <li className={activeList === 'mastered' ? 'active' : ''} onClick={() => handleListChange("mastered")} id="mastered1">
                        Technologies Mastered
                    </li>
                    <li className={activeList === 'learning' ? 'active' : ''} onClick={() => handleListChange("learning")} id="learning1">
                        Technologies familiar with
                    </li>
                    <li className={activeList === 'tools' ? 'active' : ''} onClick={() => handleListChange("tools")} id="tools1">
                        Tools
                    </li>
                </ul>
                <section className="react-section1">
                    {getListToRender()
                        .sort((a,b) => a.name.localeCompare(b.name))
                        .map((item) => (
                            <Languages key={item.name} {...item} />
                    ))}
                </section>
            </div>
        </section>
    );
}
