"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var suburb = (function () {
    function suburb() {
    }
    return suburb;
}());
exports.suburb = suburb;
var SuburbService = (function () {
    function SuburbService(http) {
        var _this = this;
        this.http = http;
        this._suburbs = [];
        this.getSuburbs().subscribe(function (data) { return _this._suburbs = data; });
    }
    SuburbService.prototype.getSuburbs = function () {
        return this.http.get('/api/suburbs', null)
            .map(function (response) { return response.json(); })
            .map(function (data) { return data; });
    };
    Object.defineProperty(SuburbService.prototype, "suburbs", {
        get: function () {
            return this._suburbs;
        },
        enumerable: true,
        configurable: true
    });
    return SuburbService;
}());
SuburbService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SuburbService);
exports.SuburbService = SuburbService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VidXJiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdWJ1cmIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFFeEQsaUNBQThCO0FBRTlCO0lBQUE7SUFHQSxDQUFDO0lBQUQsYUFBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBSFksd0JBQU07QUFPbkIsSUFBYSxhQUFhO0lBSXRCLHVCQUFvQixJQUFVO1FBQTlCLGlCQUlDO1FBSm1CLFNBQUksR0FBSixJQUFJLENBQU07UUFGdEIsYUFBUSxHQUFhLEVBQUUsQ0FBQztRQUc1QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUN2QixVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFwQixDQUFvQixDQUMvQixDQUFDO0lBQ04sQ0FBQztJQUVPLGtDQUFVLEdBQWxCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUM7YUFDckMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBRTthQUNqQyxHQUFHLENBQUUsVUFBQSxJQUFJLElBQUksT0FBVyxJQUFJLEVBQWYsQ0FBZSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHNCQUFJLGtDQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVMLG9CQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSxhQUFhO0lBRHpCLGlCQUFVLEVBQUU7cUNBS2lCLFdBQUk7R0FKckIsYUFBYSxDQW9CekI7QUFwQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCdcclxuXHJcbmV4cG9ydCBjbGFzcyBzdWJ1cmIge1xyXG4gICAgcG9zdGNvZGU6IG51bWJlcjtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdWJ1cmJTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIF9zdWJ1cmJzOiBzdWJ1cmJbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCApIHtcclxuICAgICAgICB0aGlzLmdldFN1YnVyYnMoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5fc3VidXJicyA9IGRhdGFcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U3VidXJicygpOiBPYnNlcnZhYmxlPHN1YnVyYltdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9hcGkvc3VidXJicycsIG51bGwpXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpIClcclxuICAgICAgICAgICAgLm1hcCggZGF0YSA9PiA8c3VidXJiW10+IGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdWJ1cmJzKCkgOnN1YnVyYltdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3VidXJicztcclxuICAgIH1cclxuXHJcbn1cclxuIl19