import { useLayoutEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { saveNewBlock, updateBlock } from '../../api'
import { getRawJson as getRawBlueprintJson } from '../../store/block-blueprint'
import { setPostId } from '../../store/post-metadata'

import Navigator from '../Navigator'
import PageBlockJson from '../PageBlockJson'
import PageBlueprint from '../PageBlueprint'
import PageEditorCss from '../PageEditorCss'
import PageViewCss from '../PageViewCss'
import UpsellPrompt from '../UpsellPrompt'

import './style.css'
import './style-debug.css'

function App() {

	const dispatch = useDispatch()

	const ref = useRef( null )

	const [ activeNavItem, setActiveNavItem ] = useState( 0 )

	const postId = useSelector( ( state ) => (
		state.postMetadata.postId
	) )

	const postType = useSelector( ( state ) => (
		state.postType
	) )

	const blockBlueprint = useSelector( ( state ) => (
		state.blockBlueprint
	) )

	const blockJson = useSelector( ( state ) => (
		state.blockJson
	) )

	const blockEditorCss = useSelector( ( state ) => (
		state.blockEditorCss.raw
	) )

	const blockViewCss = useSelector( ( state ) => (
		state.blockViewCss.raw
	) )

	const upsellPromptIsVisible = useSelector( ( state ) => (
		state.upsellPrompt.visible
	) )

	const onPreview = () => {

	}

	const onUpdate = () => {
		if ( postId === null ) {
			saveNewBlock( {
				postType,
				blockBlueprint: getRawBlueprintJson( blockBlueprint ),
				blockJson,
				blockEditorCss,
				blockViewCss,
			} ).then( ( { id } ) => {
				dispatch( setPostId( id ) )
				window.history.pushState(
					{ id },
					`Edit Block < Flickerbox - WordPress`,
					`/wp-admin/post.php?post=${ id }&action=edit`
				);
			} )
		} else {
			updateBlock( {
				postId,
				postType,
				blockBlueprint: getRawBlueprintJson( blockBlueprint ),
				blockJson,
				blockEditorCss,
				blockViewCss,
			} )
		}
	}

	if ( process.env.NODE_ENV === 'development' ) {
		useLayoutEffect( () => {
			ref.current.classList.toggle( 'is-debug', process.env.NODE_ENV === 'development' )
		}, [ process.env.NODE_ENV ] )
	}

	return (
		<div ref={ ref } className="App">
			<Navigator
				activeNavItem={ activeNavItem }
				setActiveNavItem={ setActiveNavItem }
				onPreview={ onPreview }
				onUpdate={ onUpdate }
			/>
			{ activeNavItem === 0 && (
				<PageBlockJson />
			) }
			{ activeNavItem === 1 && (
				<PageBlueprint />
			) }
			{ activeNavItem === 2 && (
				<PageViewCss />
			) }
			{ activeNavItem === 3 && (
				<PageEditorCss />
			) }
			{ env.PRO_VERSION !== true && upsellPromptIsVisible && (
				<UpsellPrompt />
			) }
		</div>
	)

}

export default App
