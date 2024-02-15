import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { delimiterize } from '../../functions'
import { setIcon, setKeywords, setName, setTitle } from '../../store/block-json'

import { useFocus } from '../../hooks'

import JsonEditor from '../JsonEditor'
import ListField from '../ListField'
import ReadOnlyTextField from '../ReadOnlyTextField'
import DashiconsField from '../DashiconsField'
import SelectField from '../SelectField'
import TextField from '../TextField'
import TextareaField from '../TextareaField'

import './style.css'

const {
	blockNamespace = 'blueprint-blocks',
} = ( blueprintBlocksEditorSettings?.blockMetadata || {} )

function PageBlockJson() {

	const dispatch = useDispatch()

	const {
		name: blockName,
		title: blockTitle,
		keywords: blockKeywords,
		icon: blockIcon,
		textdomain, // to update
		description, // to update
		category, // to update
		...blockJson
	} = useSelector( ( state ) => {
		return state.blockJson || {}
	} )

	const setBlockName = ( name ) => {
		dispatch( setName( name ) )
	 }

	const setBlockTitle = ( title ) => {
		dispatch( setTitle( title ) )

		if ( !isEditingBlockName ) {
			setBlockName( `${ blockNamespace }/${ delimiterize( title ) }` )
		}
	}

	const setBlockKeywords = ( keywords ) => {
		dispatch( setKeywords( keywords ) )
	}

	const setBlockIcon = ( icon ) => {
		dispatch( setIcon( icon ) )
	}

	const [ hasFocus, onBlur, onFocus ] = useFocus( [] )

	const [ isEditingBlockName, setIsEditingBlockName ] = useState(
		blockName !== `${ blockNamespace }/${ delimiterize( blockTitle || '' ) }`
	)

	const [ isEditingBlockTextdomain, setIsEditingBlockTextdomain ] = useState(textdomain !== blockNamespace)

	const [ blockTextdomain, setBlockTextdomain ] = useState( textdomain )
	const [ blockDescription, setBlockDescription ] = useState( description )
	const [ blockCategory, setBlockCategory ] = useState( category )

	return (
		<div className="PageBlockJson">
			<div className="PageBlockJson-grid">
				<div className="PageBlockJson-fields">
					<TextField
						name="title"
						label="Block title"
						placeholder="Enter a title for your block..."
						tooltip="Hello..."
						value={ blockTitle }
						setValue={ setBlockTitle }
						onFocus={ () => onFocus(...['title', !isEditingBlockName && 'name']) }
						onBlur={ () => onBlur(...['title', !isEditingBlockName && 'name']) }
					/>
					{ isEditingBlockName && (
						<TextField
							name="name"
							label="Block name"
							placeholder="Enter a name for your block..."
							tooltip="Hello..."
							value={ blockName }
							setValue={ ( value ) => {
								setBlockName(value)
							} }
							onFocus={ () => onFocus('name') }
							onBlur={ () => onBlur('name') }
						/>
					) }
					{ !isEditingBlockName && (
						<ReadOnlyTextField
							name="name"
							label="Block name"
							tooltip="Hello..."
							value={ blockName }
							onEdit={ () => {
								setIsEditingBlockName(true)
							} }
						/>
					) }
					{ isEditingBlockTextdomain && (
						<TextField
							name="text-domain"
							label="Text domain"
							placeholder="Enter a text domain for your block..."
							tooltip="Hello..."
							value={ blockTextdomain }
							setValue={ ( value ) => {
								setBlockTextdomain(value)
							} }
							onFocus={ () => onFocus('textdomain') }
							onBlur={ () => onBlur('textdomain') }
						/>
					) }
					{ !isEditingBlockTextdomain && (
						<ReadOnlyTextField
							name="text-domain"
							label="Text domain"
							tooltip="Hello..."
							value={ blockTextdomain }
							onEdit={ () => {
								setIsEditingBlockTextdomain(true)
							} }
						/>
					) }
					<TextareaField
						name="description"
						label="Description"
						placeholder="Enter a description for your block..."
						tooltip="Hello..."
						value={ blockDescription }
						setValue={ setBlockDescription }
						onFocus={ () => onFocus('description') }
						onBlur={ () => onBlur('description') }
					/>
					<DashiconsField
						name="icon"
						label="Block icon"
						value={ blockIcon }
						setValue={ setBlockIcon }
					/>
					<ListField
						name="keywords"
						label="Keywords"
						placeholder=""
						tooltip="Keywords are used to find your block when searching in the editor."
						value={ blockKeywords }
						setValue={ setBlockKeywords }
						onFocus={ ( index ) => onFocus( 'keywords', index ) }
						onBlur={ ( index ) => onBlur( 'keywords', index ) }
						max={ 3 }
					/>
					<SelectField
						name="category"
						label="Category"
						tooltip="Hello..."
						options={ [
							{
								label: 'Common',
								value: 'common',
							},
							{
								label: 'Layout',
								value: 'layout',
							}
						] }
						value={ blockCategory }
						setValue={ setBlockCategory }
						onFocus={ () => onFocus('category') }
						onBlur={ () => onBlur('category') }
					/>
				</div>
				<div className="PageBlockJson-json">
					<JsonEditor
						focus={ hasFocus }
						json={ blockJson }
						placeholders={ {
							title: 'Enter a title for your block...',
							description: 'Enter a description for your block...',
							keywords: 'Enter a keyword...',
						} }
						values={ {
							textdomain: blockTextdomain,
							name: blockName,
							title: blockTitle,
							description: blockDescription,
							category: blockCategory,
							keywords: blockKeywords,
						} }
					/>
				</div>
			</div>
		</div>
	)
}

export default PageBlockJson
