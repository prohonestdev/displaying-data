import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me.component';
import { KeyUpComponent_v1 } from './keyup.components';
import { StrongKeyUpV1} from './strongkeyup.component';
import { LoopbackComponent} from './loop-back.component';
import { KeyUpComponent_v2} from './keyup.component2';
import { KeyUpComponent_v3} from './keyup.components3';
import { KeyUpComponent_v4} from './keyup.components4';
import { AddHeroComponent} from './addhero.components';

bootstrap(AppComponent);
bootstrap(ClickMeComponent);
bootstrap(KeyUpComponent_v1);
bootstrap(StrongKeyUpV1);
bootstrap(LoopbackComponent);
bootstrap(KeyUpComponent_v2);
bootstrap(KeyUpComponent_v3);
bootstrap(KeyUpComponent_v4);
bootstrap(AddHeroComponent);