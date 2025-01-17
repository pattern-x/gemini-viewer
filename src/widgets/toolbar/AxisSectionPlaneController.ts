import { ToolbarMenuBaseController } from "./ToolbarMenuBaseController";

/**
 * SectionPlaneController
 */
export class AxisSectionPlaneController extends ToolbarMenuBaseController {
    /**
     * onActive can be triggered by 'click' event, also can be triggered by other events, e.g. anohter conflicted button is clicked.
     */
    protected onActive(active: boolean) {
        super.onActive(active);
        this.bimViewer.suppressSingleSelection(active);
        this.bimViewer.activeAxisSectionPlane(active);
        //Reset. Remove the last result
        if (!active) {
            this.bimViewer.axisSectionPlanePlugin.reset();
        }
        if (this.parent) {
            this.parent.setActive(active); // also update parent's status
        }
    }
}
