import { forwardRef } from 'react'

import { blockComponents } from '../../data'

import BlueprintSidebarItem from '../BlueprintSidebarItem'

import './style.css'

const BlueprintSidebarComponentsPanel = forwardRef( ( {
	editorRef = null,
}, ref ) => {

	return (
		<div ref={ ref } className="BlueprintSidebarComponentsPanel">

			<div className="BlueprintSidebar-heading">
				{ 'Components' }
			</div>

			{ blockComponents.fields.map( ( props, index ) => (
				<BlueprintSidebarItem
					{ ...props }
					key={ index }
					editorRef={ editorRef }
				/>
			) ) }

			<div className="BlueprintSidebar-heading">
				{ 'HTML' }
			</div>

			{ blockComponents.html.map( ( props, index ) => (
				<BlueprintSidebarItem
					{ ...props }
					key={ index }
					editorRef={ editorRef }
				/>
			) ) }

		</div>
	)

} )

export default BlueprintSidebarComponentsPanel
