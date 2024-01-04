
    // let vanticResolverServiceSpy: jasmine.SpyObj<VanticResolverService>;
    // let litelResolverServiceSpy: jasmine.SpyObj<LitelResolverService>;
    // let kioskResolverServiceSpy: jasmine.SpyObj<KioskResolverService>;
    // let triposResolverServiceSpy: jasmine.SpyObj<TriposResolverService>;


    
    // vanticResolverServiceSpy = jasmine.createSpyObj('vanticResolverService', ['resolve']);
    // litelResolverServiceSpy = jasmine.createSpyObj('litelResolverService', ['resolve']);
    // kioskResolverServiceSpy = jasmine.createSpyObj('kioskResolverService', ['canUseKiosk']);
    // triposResolverServiceSpy = jasmine.createSpyObj('triposResolverService', ['resolve']);

    // TestBed.configureTestingModule({
    //     providers: [
    //         FactoryResolverService,
    //         { provide: VanticResolverService, useFactory: () => vanticResolverServiceSpy },
    //         { provide: LitelResolverService, useFactory: () => litelResolverServiceSpy },
    //         { provide: KioskResolverService, useFactory: () => kioskResolverServiceSpy },
    //         { provide: TriposResolverService, useFactory: () => triposResolverServiceSpy },
    //         { provide: TriposResolverService, useFactory: () => triposResolverServiceSpy },
    //         { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig }



    // const environmentConfig = {
    //     vantivConfig: {
    //         IFrameEnabled: false
    //     }
    // };

    // it('checks if strategy used is Kiosk - Tripos', async () => {
    //     kioskResolverServiceSpy.canUseKiosk.and.resolveTo({ canUse: true });
    //     environmentConfig.vantivConfig.IFrameEnabled = true;
    //     triposResolverServiceSpy.resolve.and.resolveTo({
    //         type: TriPosStrategyComponent,
    //         data: {
    //             allowCcInput: false,
    //             getCardNameFromTriPos: true,
    //             isActive: true
    //         }
    //     });

    //     const res = await factoryResolverService.resolve();
    //     expect(res.type).toEqual(TriPosStrategyComponent);
    // });

    // it('checks if strategy used is Vantiv', async () => {
    //     kioskResolverServiceSpy.canUseKiosk.and.resolveTo({ canUse: false });
    //     environmentConfig.vantivConfig.IFrameEnabled = true;
    //     vanticResolverServiceSpy.resolve.and.resolveTo({ type: VantivIFrameStrategyComponent, data: null });
    //     const res = await factoryResolverService.resolve();
    //     expect(res.type).toEqual(VantivIFrameStrategyComponent);
    // });

    // it('checks if strategy used is Litel', async () => {
    //     kioskResolverServiceSpy.canUseKiosk.and.resolveTo({ canUse: false });
    //     environmentConfig.vantivConfig.IFrameEnabled = false;
    //     litelResolverServiceSpy.resolve.and.resolveTo({ type: LitelStrategyComponent, data: null });

    //     const res = await factoryResolverService.resolve();
    //     expect(res.type).toEqual(LitelStrategyComponent);
    // });