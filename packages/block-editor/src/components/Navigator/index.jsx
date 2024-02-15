import { navItems } from '../../data'

import './style.css'

function Navigator( {
	activeNavItem,
	setActiveNavItem,
	onUpdate,
	onPreview,
} ) {
	return (
		<div className="Navigator">
			<ul>
				{ navItems.map( ( { label }, index ) => (
					<li
						key={ index }
						className={ ( index === activeNavItem ) && 'is-active' || '' }
						onClick={ () => setActiveNavItem( index ) }
					>
						<span>{ label }</span>
					</li>
				) ) }
			</ul>
			<div className="Navigator-actions">
				<button className="Navigator-preview" onClick={ onPreview } >
					{ 'Preview' }
				</button>
				<button className="Navigator-update" onClick={ onUpdate }>
					{ 'Update' }
				</button>
			</div>
		</div>
	)
}

export default Navigator
