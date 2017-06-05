"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var testing_1 = require("@angular/http/testing");
var fake_products_1 = require("./fake-products");
var fake_condiments_1 = require("./fake-condiments");
var fake_suburbs_1 = require("./fake-suburbs");
function FakeBackendFactory(backend, options, realBackend) {
    // configure fake backend
    backend.connections.subscribe(function (connection) {
        setTimeout(function () {
            if (connection.request.url.endsWith('/api/suburbs') && connection.request.method === http_1.RequestMethod.Get) {
                connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: fake_suburbs_1.FakeSuburbs.getAll() })));
                return;
            }
            if (connection.request.url.endsWith('/api/products') && connection.request.method === http_1.RequestMethod.Get) {
                connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: fake_products_1.FakeProducts.getAll() })));
                return;
            }
            if (connection.request.url.endsWith('/api/condiments') && connection.request.method === http_1.RequestMethod.Get) {
                var urlParts = connection.request.url.split('/');
                var id = urlParts[urlParts.length - 1];
                connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: fake_condiments_1.FakeCondiments.get(id) })));
                return;
            }
        }, 500);
    });
    return new http_1.Http(backend, options);
}
exports.FakeBackendFactory = FakeBackendFactory;
;
exports.FakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: http_1.Http,
    useFactory: FakeBackendFactory,
    deps: [testing_1.MockBackend, http_1.BaseRequestOptions, http_1.XHRBackend]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFrZS1iYWNrZW5kLWZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmYWtlLWJhY2tlbmQtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUErSDtBQUMvSCxpREFBb0U7QUFDcEUsaURBQStDO0FBQy9DLHFEQUFtRDtBQUNuRCwrQ0FBNkM7QUFFN0MsNEJBQW1DLE9BQW9CLEVBQUUsT0FBMkIsRUFBRSxXQUF1QjtJQUV6Ryx5QkFBeUI7SUFDekIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQyxVQUEwQjtRQUVyRCxVQUFVLENBQUM7WUFFUCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssb0JBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNyRyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksZUFBUSxDQUFDLElBQUksc0JBQWUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLDBCQUFXLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFdkcsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxvQkFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xHLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxlQUFRLENBQUMsSUFBSSxzQkFBZSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsNEJBQVksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUU1RyxNQUFNLENBQUM7WUFDWCxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssb0JBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN4RyxJQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25ELElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksZUFBUSxDQUFDLElBQUksc0JBQWUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGdDQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXpHLE1BQU0sQ0FBQztZQUNYLENBQUM7UUFFTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFWixDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQyxJQUFJLFdBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQS9CRCxnREErQkM7QUFBQSxDQUFDO0FBRVMsUUFBQSxtQkFBbUIsR0FBRztJQUM3Qix5RUFBeUU7SUFDekUsT0FBTyxFQUFFLFdBQUk7SUFDYixVQUFVLEVBQUUsa0JBQWtCO0lBQzlCLElBQUksRUFBRSxDQUFDLHFCQUFXLEVBQUUseUJBQWtCLEVBQUUsaUJBQVUsQ0FBQztDQUN0RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cCwgQmFzZVJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSwgUmVzcG9uc2VPcHRpb25zLCBSZXF1ZXN0TWV0aG9kLCBYSFJCYWNrZW5kLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBNb2NrQmFja2VuZCwgTW9ja0Nvbm5lY3Rpb24gfSBmcm9tICdAYW5ndWxhci9odHRwL3Rlc3RpbmcnO1xyXG5pbXBvcnQgeyBGYWtlUHJvZHVjdHMgfSBmcm9tICcuL2Zha2UtcHJvZHVjdHMnO1xyXG5pbXBvcnQgeyBGYWtlQ29uZGltZW50cyB9IGZyb20gJy4vZmFrZS1jb25kaW1lbnRzJztcclxuaW1wb3J0IHsgRmFrZVN1YnVyYnMgfSBmcm9tICcuL2Zha2Utc3VidXJicyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRmFrZUJhY2tlbmRGYWN0b3J5KGJhY2tlbmQ6IE1vY2tCYWNrZW5kLCBvcHRpb25zOiBCYXNlUmVxdWVzdE9wdGlvbnMsIHJlYWxCYWNrZW5kOiBYSFJCYWNrZW5kKSB7XHJcblxyXG4gICAgLy8gY29uZmlndXJlIGZha2UgYmFja2VuZFxyXG4gICAgYmFja2VuZC5jb25uZWN0aW9ucy5zdWJzY3JpYmUoKGNvbm5lY3Rpb246IE1vY2tDb25uZWN0aW9uKSA9PiB7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbm5lY3Rpb24ucmVxdWVzdC51cmwuZW5kc1dpdGgoJy9hcGkvc3VidXJicycpICYmIGNvbm5lY3Rpb24ucmVxdWVzdC5tZXRob2QgPT09IFJlcXVlc3RNZXRob2QuR2V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uLm1vY2tSZXNwb25kKG5ldyBSZXNwb25zZShuZXcgUmVzcG9uc2VPcHRpb25zKHsgc3RhdHVzOiAyMDAsIGJvZHk6IEZha2VTdWJ1cmJzLmdldEFsbCgpIH0pKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY29ubmVjdGlvbi5yZXF1ZXN0LnVybC5lbmRzV2l0aCgnL2FwaS9wcm9kdWN0cycpICYmIGNvbm5lY3Rpb24ucmVxdWVzdC5tZXRob2QgPT09IFJlcXVlc3RNZXRob2QuR2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbi5tb2NrUmVzcG9uZChuZXcgUmVzcG9uc2UobmV3IFJlc3BvbnNlT3B0aW9ucyh7IHN0YXR1czogMjAwLCBib2R5OiBGYWtlUHJvZHVjdHMuZ2V0QWxsKCkgfSkpKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbm5lY3Rpb24ucmVxdWVzdC51cmwuZW5kc1dpdGgoJy9hcGkvY29uZGltZW50cycpICYmIGNvbm5lY3Rpb24ucmVxdWVzdC5tZXRob2QgPT09IFJlcXVlc3RNZXRob2QuR2V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmxQYXJ0cyA9IGNvbm5lY3Rpb24ucmVxdWVzdC51cmwuc3BsaXQoJy8nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdXJsUGFydHNbdXJsUGFydHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uLm1vY2tSZXNwb25kKG5ldyBSZXNwb25zZShuZXcgUmVzcG9uc2VPcHRpb25zKHsgc3RhdHVzOiAyMDAsIGJvZHk6IEZha2VDb25kaW1lbnRzLmdldChpZCkgfSkpKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgNTAwKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IEh0dHAoYmFja2VuZCwgb3B0aW9ucyk7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IEZha2VCYWNrZW5kUHJvdmlkZXIgPSB7XHJcbiAgICAvLyB1c2UgZmFrZSBiYWNrZW5kIGluIHBsYWNlIG9mIEh0dHAgc2VydmljZSBmb3IgYmFja2VuZC1sZXNzIGRldmVsb3BtZW50XHJcbiAgICBwcm92aWRlOiBIdHRwLFxyXG4gICAgdXNlRmFjdG9yeTogRmFrZUJhY2tlbmRGYWN0b3J5LFxyXG4gICAgZGVwczogW01vY2tCYWNrZW5kLCBCYXNlUmVxdWVzdE9wdGlvbnMsIFhIUkJhY2tlbmRdXHJcbn07XHJcbiJdfQ==