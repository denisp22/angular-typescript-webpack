import {ITopbarModel} from "../../../core/models/int/ITopbarModel";
import {ISharedModel} from "../../../core/models/int/ISharedModel";
export class TweetTopbarComponent implements ng.IComponentOptions{
    public controller: Function = TweetTopbarController;
    public template: string = `
        <div>
            <div class="collapsed-content" ng-if="!$ctrl.sharedModel.topbarCollapsed">
                <h1><i class="fa fa-twitter"></i>&nbsp;Post a new tweet</h1>
                <textarea class="form-control" ng-model="$ctrl.model.tweetContent"></textarea><br/>
                <button ng-disabled="$ctrl.model.tweetContent === ''"
                    ng-click="$ctrl.post()"
                    class="btn btn-primary btn-lg">
                        <i class="fa fa-envelope"></i>&nbsp;Post
                </button>
            </div>
            <i ng-click="$ctrl.toggleCollapsed()"
                class="fa fa-chevron-up dp-collapse dp-collapse-center"
                ng-class="{'fa-chevron-up': !$ctrl.sharedModel.topbarCollapsed, 'fa-chevron-down': $ctrl.sharedModel.topbarCollapsed}"></i>
        </div>
    `;
}
export class TweetTopbarController {
    public static $inject: Array<string> = ["ISharedModel", "ITopbarModel"];

    constructor(public sharedModel: ISharedModel, public model: ITopbarModel) {
    }

    public toggleCollapsed(): void {
        this.model.toggleCollapsed();
    }

    public post(): void {
        this.model.addTweet();
    }
}