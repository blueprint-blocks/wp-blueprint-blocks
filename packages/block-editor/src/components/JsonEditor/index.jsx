import EditableString from '../EditableString'
import './style.css'

function RenderJson( {
	index = null,
	property = null,
	value = null,
	comma = false,
	focus = [],
	placeholders = {},
	values = {},
} ) {

	const isNull = ( value === null )
	const isArray = ( Array.isArray( value ) )
	const isBoolean = ( typeof value === 'boolean' )
	const isString = ( typeof value === 'string' )
	const isNumber = ( typeof value === 'number' )
	const isObject = ( typeof value === 'object' && !isNull && !isArray )

	let currentFocus = false
	let subFocus = focus

	if ( property !== null || index !== null ) {
		currentFocus = focus.slice( 0, 1 )?.[ 0 ]
		subFocus = focus.slice( 1 )
	}

	const hasFocus = ( property === currentFocus || index === currentFocus )

	return (
		<>
			{ property !== null && (
				<>
					<span>{ `"${ property }"` }</span>
					<span>{ `: ` }</span>
				</>
			) }
			{ isString && (
				<>
					<span>{ '"' }</span>
					<EditableString
						className={ hasFocus && 'has-focus' || '' }
						placeholder={ typeof placeholders === 'string' && placeholders || null }
						value={ value }
					/>
					<span>{ '"' }</span>
				</>
			) }
			{ isNumber && (
				<span className={ hasFocus && 'has-focus' || '' }>
					{ value }
				</span>
			) }
			{ isBoolean && (
				<span className={ hasFocus && 'has-focus' || '' }>
					{ ( value === true ) && 'true' || 'false' }
				</span>
			) }
			{ isNull && (
				<span className={ hasFocus && 'has-focus' || '' }>
					{ `null` }
				</span>
			) }
			{ isArray && (
				<>
					<span>{ `[` }</span>
					{ value.length > 0 && (
						<div className="indent">
							{ value.map( ( v, index ) => (
								<div key={ index }>
									<RenderJson
										index={ index }
										value={ v }
										comma={ index < value.length - 1 }
										focus={ subFocus }
										placeholders={ placeholders }
									/>
								</div>
							) ) }
						</div>
					) }
					<span>{ `]` }</span>
				</>
			) }
			{ isObject && (
				<>
					<span>{ `{` }</span>
					{ Object.entries( value ).length > 0 && (
						<div className="indent">
							{ Object.entries( value ).map( ( [ k, v ], index ) => (
								<div key={ index }>
									<RenderJson
										property={ k }
										value={ v }
										comma={ index < Object.entries( value ).length - 1 }
										focus={ subFocus }
										placeholders={ placeholders?.[ k ] || null }
									/>
								</div>
							) ) }
						</div>
					) }
					<span>{ `}` }</span>
				</>
			) }
			{ comma === true && (
				<span>{ ',' }</span>
			) }
		</>
	)
}

function JsonEditor( {
	json,
	focus = [],
	placeholders = {},
	values = {},
} ) {
	return (
		<div className="JsonEditor">
			<RenderJson
				value={ json }
				focus={ focus }
				placeholders={ placeholders }
			/>
		</div>
	)
}

export default JsonEditor
