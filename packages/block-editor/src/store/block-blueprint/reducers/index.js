import getAtPosition from './get-at-position'
import insertAtPosition from './insert-at-position'
import insertDraggingComponentAtPosition from './insert-dragging-component-at-position'
import insertExistingComponentAtPosition from './insert-existing-component-at-position'
import insertNewComponentAtPosition from './insert-new-component-at-position'
import removeAtPosition from './remove-at-position'
import setComponentAttribute from './set-component-attribute'
import setComponentList from './set-component-list'
import startDraggingExistingComponent from './start-dragging-existing-component'
import startDraggingNewComponent from './start-dragging-new-component'
import stopDragging from './stop-dragging'
import unsetComponentAttribute from './unset-component-attribute'
import unsetDraggingComponent from './unset-dragging-component'

const reducers = {
	insertNewComponentAtPosition,
	insertDraggingComponentAtPosition,
	setComponentAttribute,
	setComponentList,
	startDraggingExistingComponent,
	startDraggingNewComponent,
	stopDragging,
	unsetComponentAttribute,
	unsetDraggingComponent,
}

export default reducers
