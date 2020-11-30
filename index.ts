import Element from "@heymarco/element";


/**
 * a base class providing a basic manipulation of controllable HTML element such as &lt;button&gt;, &lt;input&gt;, and &lt;textarea&gt;.
 */
export default class Control extends Element {
    constructor(selector : Selector) {
        super(selector);
    }


    /**
     * get the state of disability of current control.
     * @returns true indicates the current control is disabled, or false indicates the current control is not disabled (enabled).
     */
    get disabled() : boolean {
        return this.is(":disabled");
    }

    /**
     * set the state of disability of current control.
     * @param disabled : set true to disable this element, or false to not disable (enable) it.
     */
    set disabled(disabled : boolean) {
        if (disabled) {
            this.filter(":not(:disabled)").prop("disabled", true).trigger("disabled");
        } else {
            this.filter(":disabled").prop("disabled", false).trigger("enabled");
        }
    }
}