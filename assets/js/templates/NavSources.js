import React from 'jsx-dom';

export default function NavSources({sources}) {
    return sources.map(source =>
        <li>
            <a href="#" class={(source.unread > 0) ? 'unread' : ''} data-source-id={`${source.id}`}>
                <span class="nav-source">{`${source.title}`}</span>
                <span class="unread">{`${(source.unread > 0) ? `${source.unread}` : ''}`}</span>
            </a>
        </li>
    );
}
