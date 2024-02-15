import { useLayoutEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useDebugRenderCount, useRect } from '../../hooks'
import { setSize as setEditorSize } from '../../store/editor'
import { getComponentListDepth } from '../../store/block-blueprint'

import BlueprintAttributeList from '../BlueprintAttributeList'
import BlueprintBlockEdit from '../BlueprintBlockEdit'
import BlueprintBlockSave from '../BlueprintBlockSave'
import BlueprintBlockSidebar from '../BlueprintBlockSidebar'
import BlueprintBlockToolbar from '../BlueprintBlockToolbar'
import BlueprintConnections from '../BlueprintConnections'
import BlueprintColumn from '../BlueprintColumn'

import './style.css'
import './style-debug.css'

function BlueprintEditor() {

	const dispatch = useDispatch()

	const column2Depth = useSelector( ( state ) => (
		getComponentListDepth( state.blockBlueprint, 'edit' )
	) )

	const column3Depth = useSelector( ( state ) => (
		getComponentListDepth( state.blockBlueprint, 'toolbar' )
	) )

	const column4Depth = useSelector( ( state ) => (
		getComponentListDepth( state.blockBlueprint, 'sidebar' )
	) )

	const column5Depth = useSelector( ( state ) => (
		getComponentListDepth( state.blockBlueprint, 'save' )
	) )

	const ref = useRef ( null )
	const scrollRef = useRef( null )
	const wrapRef = useRef( null )

	const wrapRect = useRect( wrapRef, null, [ 'height', 'width' ] )

	useLayoutEffect( () => {
		dispatch( setEditorSize( {
			height: wrapRect.height,
			width: wrapRect.width,
		} ) )
	}, [ wrapRect ] )

	useLayoutEffect( () => {

		ref.current.style.setProperty( '--column-2-depth', column2Depth )
		ref.current.style.setProperty( '--column-3-depth', column3Depth )
		ref.current.style.setProperty( '--column-4-depth', column4Depth )
		ref.current.style.setProperty( '--column-5-depth', column5Depth )

	}, [ column2Depth, column3Depth, column4Depth, column5Depth ] )

	if ( process.env.NODE_ENV === 'development' ) {
		useDebugRenderCount( 'BlueprintEditor' )
	}

	return (
		<div ref={ ref } className="BlueprintEditor">
			<div ref={ scrollRef } className="BlueprintEditor-scroll">
				<div ref={ wrapRef } className="BlueprintEditor-wrap">

					<div className="BlueprintEditor-grid"/>

					<BlueprintConnections/>

					<div className="BlueprintEditor-columns">

						<BlueprintColumn label="Block Attributes">
							<BlueprintAttributeList editorRef={ scrollRef } />
						</BlueprintColumn>

						<BlueprintColumn label="Block Edit">
							<BlueprintBlockEdit editorRef={ scrollRef } />
						</BlueprintColumn>

						<BlueprintColumn label="Block Toolbar">
							<BlueprintBlockToolbar editorRef={ scrollRef } />
						</BlueprintColumn>

						<BlueprintColumn label="Block Sidebar">
							<BlueprintBlockSidebar editorRef={ scrollRef } />
						</BlueprintColumn>

						<BlueprintColumn label="Block Save">
							<BlueprintBlockSave editorRef={ scrollRef } />
						</BlueprintColumn>

					</div>

				</div>
			</div>
		</div>
	)

}

export default BlueprintEditor
