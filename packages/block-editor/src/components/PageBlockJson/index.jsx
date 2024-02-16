import classNames from 'classnames'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setIcon, setKeywords, setTitle } from '../../store/block-json'

import { useFocus } from '../../hooks'

import BlockNameField from '../BlockNameField'
import BlockVersionField from '../BlockVersionField'
import JsonEditor from '../JsonEditor'
import ListField from '../ListField'
import ReadOnlyTextField from '../ReadOnlyTextField'
import DashiconsField from '../DashiconsField'
import ProFlag from '../ProFlag'
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

	const setBlockTitle = ( title ) => {
		dispatch( setTitle( title ) )
	}

	const setBlockKeywords = ( keywords ) => {
		dispatch( setKeywords( keywords ) )
	}

	const setBlockIcon = ( icon ) => {
		dispatch( setIcon( icon ) )
	}

	const [ hasFocus, onBlur, onFocus ] = useFocus( [] )

	const [ isEditingBlockTextdomain, setIsEditingBlockTextdomain ] = useState(textdomain !== blockNamespace)

	const [ blockTextdomain, setBlockTextdomain ] = useState( textdomain )
	const [ blockDescription, setBlockDescription ] = useState( description )
	const [ blockCategory, setBlockCategory ] = useState( category )

	return (
		<div className="PageBlockJson">
			<div className="PageBlockJson-grid">
				<div className="PageBlockJson-fields">

					<div className="PageBlockJson-fieldset" style={ { gap: 'var(--1x)' } }>
						<BlockNameField />
						<BlockVersionField />
					</div>

					<div className="PageBlockJson-fieldset">
					<TextField
							label="Enter a title..."
							tooltip="Hello..."
							value={ blockTitle }
							setValue={ setBlockTitle }
							onFocus={ () => onFocus( 'title' ) }
							onBlur={ () => onBlur( 'title' ) }
						/>
						{ env.PRO_VERSION === true && (
							<TextField
								label="Enter a text domain..."
								tooltip="Hello..."
								value={ blockTextdomain }
								setValue={ setBlockTextdomain }
								onFocus={ () => onFocus( 'textdomain' ) }
								onBlur={ () => onBlur( 'textdomain' ) }
							/>
						) }
						<TextField
							label="Enter a description..."
							tooltip="Hello..."
							multiLine={ true }
							rows={ 4 }
							value={ blockDescription }
							setValue={ setBlockDescription }
							onFocus={ () => onFocus( 'description' ) }
							onBlur={ () => onBlur( 'description' ) }
						/>
						<DashiconsField
							name="icon"
							label="Block icon"
							value={ blockIcon }
							setValue={ setBlockIcon }
						/>
						<ListField
							label="Enter a few keywords..."
							placeholder="Enter a keyword..."
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

					<div className="PageBlockJson-fieldset">
						<div className="PageBlockJson-header">
							<div>{ 'Inner Blocks' }</div>
							{ env.PRO_VERSION !== true && (
								<ProFlag />
							) }
						</div>
						<ListField
							disabled={ env.PRO_VERSION !== true }
							name="keywords"
							label="What blocks can this block be inserted in?"
							placeholder="Start typing to choose a block..."
							tooltip="Keywords are used to find your block when searching in the editor."
							value={ blockKeywords }
							setValue={ setBlockKeywords }
							onFocus={ ( index ) => onFocus( 'keywords', index ) }
							onBlur={ ( index ) => onBlur( 'keywords', index ) }
							max={ 3 }
						/>
						<ListField
							disabled={ env.PRO_VERSION !== true }
							name="keywords"
							label="What blocks can this block be inserted in, anywhere in the ancestry tree?"
							placeholder="Start typing to choose a block..."
							tooltip="Keywords are used to find your block when searching in the editor."
							value={ blockKeywords }
							setValue={ setBlockKeywords }
							onFocus={ ( index ) => onFocus( 'keywords', index ) }
							onBlur={ ( index ) => onBlur( 'keywords', index ) }
							max={ 3 }
						/>
						<ListField
							disabled={ env.PRO_VERSION !== true }
							name="keywords"
							label="What blocks can be inserted into this block?"
							placeholder="Start typing to choose a block..."
							tooltip="Keywords are used to find your block when searching in the editor."
							value={ blockKeywords }
							setValue={ setBlockKeywords }
							onFocus={ ( index ) => onFocus( 'keywords', index ) }
							onBlur={ ( index ) => onBlur( 'keywords', index ) }
							max={ 3 }
						/>
					</div>

					<div className="PageBlockJson-fieldset">
						<div className="PageBlockJson-header">
							<div>{ 'Block Supports' }</div>
						</div>
					</div>

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
