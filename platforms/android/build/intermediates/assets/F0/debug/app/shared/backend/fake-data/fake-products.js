"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_models_1 = require("../product.models");
var FakeProducts = (function () {
    function FakeProducts() {
    }
    FakeProducts.getAll = function () {
        return [
            {
                productGroupId: '13130770-c215-4404-a8cd-9fe72fa5eb06',
                label: 'Popular Dishes',
                icon: 'star',
                products: [
                    {
                        productId: '67e8ca3c-849e-4a21-862b-e26ae6953dc0',
                        label: 'Marinated Grilled Chicken Burger',
                        detail: 'Chicken breast, mozzarella cheese, tomato, garden leaves and smoked chipotle chilli mayo',
                        condiment: product_models_1.condimentOperation.force,
                        price: 4
                    },
                    {
                        productId: 'c3ceb76e-725c-4bf2-b740-8cfb9999e675',
                        label: 'Gourmet Steak Burger',
                        detail: 'Scotch fillet, lettuce, tomato, caramelised onion, pickled beetroot and peri peri aioli',
                        condiment: product_models_1.condimentOperation.force,
                        price: 6
                    }
                ]
            },
            {
                productGroupId: '55f266dc-6c37-4c11-b7c2-7b9cec778390',
                label: 'Deep Fried Meals',
                icon: '',
                products: [
                    {
                        productId: '7772170f-a09a-4d1a-9256-91e7af22b0d1',
                        label: 'Marinated Grilled Chicken Burger',
                        detail: 'Chicken breast, mozzarella cheese, tomato, garden leaves and smoked chipotle chilli mayo',
                        condiment: product_models_1.condimentOperation.force,
                        price: 23
                    },
                    {
                        productId: 'b4cf86e1-cbdd-4c09-8bb5-7767d21eaa35',
                        label: 'Gourmet Steak Burger',
                        detail: 'Scotch fillet, lettuce, tomato, caramelised onion, pickled beetroot and peri peri aioli',
                        condiment: product_models_1.condimentOperation.force,
                        price: 42
                    }
                ]
            }
        ];
    };
    return FakeProducts;
}());
exports.FakeProducts = FakeProducts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFrZS1wcm9kdWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZha2UtcHJvZHVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvREFBbUU7QUFFbkU7SUFBQTtJQW1EQSxDQUFDO0lBakRXLG1CQUFNLEdBQWQ7UUFFSSxNQUFNLENBQUM7WUFDSDtnQkFDSSxjQUFjLEVBQUMsc0NBQXNDO2dCQUNyRCxLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUU7b0JBQ047d0JBQ0ksU0FBUyxFQUFFLHNDQUFzQzt3QkFDakQsS0FBSyxFQUFFLGtDQUFrQzt3QkFDekMsTUFBTSxFQUFFLDBGQUEwRjt3QkFDbEcsU0FBUyxFQUFFLG1DQUFrQixDQUFDLEtBQUs7d0JBQ25DLEtBQUssRUFBRSxDQUFDO3FCQUNYO29CQUNEO3dCQUNJLFNBQVMsRUFBRSxzQ0FBc0M7d0JBQ2pELEtBQUssRUFBRSxzQkFBc0I7d0JBQzdCLE1BQU0sRUFBRSx5RkFBeUY7d0JBQ2pHLFNBQVMsRUFBRSxtQ0FBa0IsQ0FBQyxLQUFLO3dCQUNuQyxLQUFLLEVBQUUsQ0FBQztxQkFDWDtpQkFDSjthQUNKO1lBQ0Q7Z0JBQ0ksY0FBYyxFQUFFLHNDQUFzQztnQkFDdEQsS0FBSyxFQUFFLGtCQUFrQjtnQkFDekIsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFO29CQUNOO3dCQUNJLFNBQVMsRUFBRSxzQ0FBc0M7d0JBQ2pELEtBQUssRUFBRSxrQ0FBa0M7d0JBQ3pDLE1BQU0sRUFBRSwwRkFBMEY7d0JBQ2xHLFNBQVMsRUFBRSxtQ0FBa0IsQ0FBQyxLQUFLO3dCQUNuQyxLQUFLLEVBQUUsRUFBRTtxQkFDWjtvQkFDRDt3QkFDSSxTQUFTLEVBQUUsc0NBQXNDO3dCQUNqRCxLQUFLLEVBQUUsc0JBQXNCO3dCQUM3QixNQUFNLEVBQUUseUZBQXlGO3dCQUNqRyxTQUFTLEVBQUUsbUNBQWtCLENBQUMsS0FBSzt3QkFDbkMsS0FBSyxFQUFFLEVBQUU7cUJBQ1o7aUJBQ0o7YUFDSjtTQUNKLENBQUE7SUFFTCxDQUFDO0lBRUwsbUJBQUM7QUFBRCxDQUFDLEFBbkRELElBbURDO0FBbkRZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwcm9kdWN0R3JvdXAsIGNvbmRpbWVudE9wZXJhdGlvbn0gZnJvbSAnLi4vcHJvZHVjdC5tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZha2VQcm9kdWN0cyB7XHJcblxyXG4gICAgc3RhdGljICBnZXRBbGwoKTogcHJvZHVjdEdyb3VwW10ge1xyXG5cclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0R3JvdXBJZDonMTMxMzA3NzAtYzIxNS00NDA0LWE4Y2QtOWZlNzJmYTVlYjA2JyxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnUG9wdWxhciBEaXNoZXMnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N0YXInLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogJzY3ZThjYTNjLTg0OWUtNGEyMS04NjJiLWUyNmFlNjk1M2RjMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTWFyaW5hdGVkIEdyaWxsZWQgQ2hpY2tlbiBCdXJnZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6ICdDaGlja2VuIGJyZWFzdCwgbW96emFyZWxsYSBjaGVlc2UsIHRvbWF0bywgZ2FyZGVuIGxlYXZlcyBhbmQgc21va2VkIGNoaXBvdGxlIGNoaWxsaSBtYXlvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGltZW50OiBjb25kaW1lbnRPcGVyYXRpb24uZm9yY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiA0XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogJ2MzY2ViNzZlLTcyNWMtNGJmMi1iNzQwLThjZmI5OTk5ZTY3NScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnR291cm1ldCBTdGVhayBCdXJnZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6ICdTY290Y2ggZmlsbGV0LCBsZXR0dWNlLCB0b21hdG8sIGNhcmFtZWxpc2VkIG9uaW9uLCBwaWNrbGVkIGJlZXRyb290IGFuZCBwZXJpIHBlcmkgYWlvbGknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaW1lbnQ6IGNvbmRpbWVudE9wZXJhdGlvbi5mb3JjZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IDZcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RHcm91cElkOiAnNTVmMjY2ZGMtNmMzNy00YzExLWI3YzItN2I5Y2VjNzc4MzkwJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnRGVlcCBGcmllZCBNZWFscycsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6ICc3NzcyMTcwZi1hMDlhLTRkMWEtOTI1Ni05MWU3YWYyMmIwZDEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ01hcmluYXRlZCBHcmlsbGVkIENoaWNrZW4gQnVyZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiAnQ2hpY2tlbiBicmVhc3QsIG1venphcmVsbGEgY2hlZXNlLCB0b21hdG8sIGdhcmRlbiBsZWF2ZXMgYW5kIHNtb2tlZCBjaGlwb3RsZSBjaGlsbGkgbWF5bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpbWVudDogY29uZGltZW50T3BlcmF0aW9uLmZvcmNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogMjNcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiAnYjRjZjg2ZTEtY2JkZC00YzA5LThiYjUtNzc2N2QyMWVhYTM1JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdHb3VybWV0IFN0ZWFrIEJ1cmdlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDogJ1Njb3RjaCBmaWxsZXQsIGxldHR1Y2UsIHRvbWF0bywgY2FyYW1lbGlzZWQgb25pb24sIHBpY2tsZWQgYmVldHJvb3QgYW5kIHBlcmkgcGVyaSBhaW9saScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpbWVudDogY29uZGltZW50T3BlcmF0aW9uLmZvcmNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogNDJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=