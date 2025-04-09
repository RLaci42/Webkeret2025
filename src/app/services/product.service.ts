import { Injectable } from '@angular/core';
import { FishingRod } from '../models/fishing-rod.model';
import { Reel } from '../models/reel.model';
import { Hook } from '../models/hook.model';
import { Bobber } from '../models/bobber.model';
import { BiteIndicator } from '../models/bite-indicator.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private fishingRods: FishingRod[] = [
    new FishingRod('EF-13331-330', 'Benzar Concourse', 'Benzar Mix', 330, '20-60', 33990, true, 'fishing-rods/benzar-concourse.png'),
    new FishingRod('TF-1861-390', 'By Döme TF Gold Serie 390ML', 'By Döme', 390, '30-60', 59990, true, 'fishing-rods/by-dome-tf-gold-serie-390ml.png'),
    new FishingRod('TF-1870-430', 'By Döme TF Master 430LC', 'By Döme', 430, '70-195', 64990, true, 'fishing-rods/by-dome-tf-master-430lc.png'),
    new FishingRod('EF-14070-362', 'Carp Expert Advancer Feeder', 'Carp Expert', 360, '50-100', 10990, true, 'fishing-rods/carp-expert-advancer-feeder.png'),
    new FishingRod('CZ-CZ3909', 'CZ Vesuv Picker', 'Carp Zoom', 300, '10-25', 6990, false, 'fishing-rods/cz-vesuv-picker.jpg'),
    new FishingRod('JX-WJ-ZFI360100', 'Jaxon Zafira Feeder RT', 'Jaxon', 360, '50-100', 9990, true, 'fishing-rods/jaxon-zaffira-feeder-rt.png'),
    new FishingRod('KG-154008390', 'Konger Endura Feeder Big Eye', 'Konger', 390, '180', 34990, false, 'fishing-rods/konger-endura-feeder-big-eye.png'),
    new FishingRod('MT-GRD211', 'Matrix Ethos XR-D', 'Matrix', 420, '150', 110880, false, 'fishing-rods/matrix-ethos-xr-d.png'),
    new FishingRod('MT-GRD177', 'Matrix Horizon Pro X', 'Matrix', 430, '150', 171990, true, 'fishing-rods/matrix-horizon-pro-x.png'),
    new FishingRod('EF-MA112-001', 'Maver Thor Master Light', 'Maver', 330, '25-75', 30990, true, 'fishing-rods/maver-thor-master-light.png'),
    new FishingRod('DM-153-04-390', 'Trabucco Inspiron FD Master', 'Trabucco', 390, '90', 50890, true, 'fishing-rods/trabucco-inspiron-fd-master.png'),
    new FishingRod('DM-150-60-230', 'Trabucco Perfecta GX', 'Trabucco', 420, '90', 66990, true, 'fishing-rods/trabucco-perfecta-gx.png'),
    new FishingRod('DM-152-22-395', 'Trabucco Precision RPL', 'Trabucco', 390, '230', 46990, false, 'fishing-rods/trabucco-precision-rpl.png')
  ];

  private reels: Reel[] = [
    new Reel('BA-0010029430', 'Balzer Tactics CL 4300 B', 'Balzer', 3000, '0,30mm/200m', 20990, true, 'reels/balzer-tactics-cl-4300-b.jpg'),
    new Reel('SN-19999-819', 'By Döme TF Carpfighter Pro 6000', 'By Döme', 6000, '0,25mm/145m', 19990, false, 'reels/by-dome-tf-carpfighter-pro-6000.jpg'),
    new Reel('MS-101003957', 'Delphin Legius 7T', 'Delphin', 7000, '0,22mm/430m', 17990, true, 'reels/delphin-legius-7t.jpg'),
    new Reel('FX-CRL081', 'Fox Eos 10K Pro', 'Fox', 10000, '0,33mm/320m', 41990, true, 'reels/fox-eos-10k-pro.jpg'),
    new Reel('JX-KJ-SAD700', 'Jaxon Satori Dura 700', 'Jaxon', 7000, '0,30mm/700m', 18990, false, 'reels/jaxon-satori-dura.jpg'),
    new Reel('DM-037-80-800', 'K-Karp Endless 10000', 'K-Karp', 10000, '0,35/530m', 42990, true, 'reels/k-karp-endless-10000.jpg'),
    new Reel('DM-037-81-065', 'K-Karp Fusion 6500', 'K-Karp', 6500, '0,30mm/450m', 44990, false, 'reels/k-karp-fusion-6500.jpg'),
    new Reel('DM-037-76-800', 'K-Karp Reaction VX 8000', 'K-Karp', 8000, '0,35mm/520m', 60990, true, 'reels/k-karp-reaction-vx-8000.jpg'),
    new Reel('MF-KDA130-3005FD', 'Mikado Katsudo Runner 3005FD', 'Mikado', 3000, '0,30mm/200m', 37990, true, 'reels/mikado-katsudo-runner-3005fd.jpg'),
    new Reel('TF-2527-470', 'Nevis Monster LCS 7000', 'Nevis', 7000, '0,40mm/250m', 16990, true, 'reels/nevis-monster-lcs-7000.jpg'),
    new Reel('PF-1612610', 'Penn Spinfisher', 'Penn', 6500, '0,33m/350m', 79990, true, 'reels/penn-spinfisher-vii-6500.jpg'),
    new Reel('SS-29523', 'Starbaits CX 5000 FS', 'Starbaits', 5000, '0,28mm/580m', 17990, true, 'reels/starbaits-cx-5000-fs.jpg')
  ];

  private hooks: Hook[] = [
    new Hook('TF-147671-002', 'A1 Teflon Specialist', 'Gamakatsu', 2, 2990, true, 'fishing-hooks/a1-teflon-specialist.jpg'),
    new Hook('PR-A0520002', 'Armorok Hooks Curve', 'Avid', 4, 2390, true, 'fishing-hooks/armorok-hooks-curve.jpg'),
    new Hook('MS-622010300', 'Delphin HKD Iseama', 'Delphin', 3, 990, true, 'fishing-hooks/delphin-hkd-iseama.jpg'),
    new Hook('SS-33918', 'Feeder-Tech 3445', 'Sensas', 12, 1590, true, 'fishing-hooks/feeder-tech-3445.jpg'),
    new Hook('TM-GK14', 'Guru Kaizen Hook', 'Guru', 14, 1190, true, 'fishing-hooks/guru-kaizen-hook.jpg'),
    new Hook('KG-516400301', 'Kamatsu Hadoura Chisana', 'Kamatsu', 1, 2490, true, 'fishing-hooks/kamatsu-hadoura-chisana.jpg'),
    new Hook('EF-PXPS1-255', 'Pallatrax Gripz Curve Shank', 'Pallatrax', 4, 3290, true, 'fishing-hooks/pallatrax-gripz-curve-shank.jpg'),
    new Hook('SS-34469', 'Power Snag', 'Starbaits', 8, 2190, true, 'fishing-hooks/power-snag-8.jpg'),
    new Hook('TM-P0150025', 'XSH-B Hooks', 'Preston', 10, 990, true, 'fishing-hooks/xsh-b-hooks.jpg')
  ];

  private bobbers: Bobber[] = [
    new Bobber('JX-SE-AF030', 'Jaxon Float Type AF', 'Jaxon', 790, true, 'bobbers/jaxon-float-type-af.jpg'),
    new Bobber('JX-SE-AH080', 'Jaxon Float Type AH', 'Jaxon', 890, true, 'bobbers/jaxon-float-type-ah.jpg'),
    new Bobber('JX-SE-BC055', 'Jaxon Float Type BC', 'Jaxon', 790, true, 'bobbers/jaxon-float-type-bc.jpg'),
    new Bobber('JX-SE-JB040', 'Jaxon Float Type JB', 'Jaxon', 890, false, 'bobbers/jaxon-float-type-jb.jpg'),
    new Bobber('JX-SE-JG030', 'Jaxon Float Type JG', 'Jaxon', 1090, true, 'bobbers/jaxon-float-type-jg.jpg'),
    new Bobber('JX-SE-JX010', 'Jaxon Float Type JX', 'Jaxon', 1490, true, 'bobbers/jaxon-float-type-jx.jpg'),
    new Bobber('JX-SE-KJA015', 'Jaxon Float Type KJA', 'Jaxon', 890, true, 'bobbers/jaxon-float-type-kja.jpg'),
    new Bobber('JX-SE-WE630', 'Jaxon Float Type WE', 'Jaxon', 1890, true, 'bobbers/jaxon-float-type-we.jpg'),
    new Bobber('JX-SE-WG050', 'Jaxon Float Type WG', 'Jaxon', 1490, true, 'bobbers/jaxon-float-type-wg.jpg'),
    new Bobber('JX-SE-WH430', 'Jaxon Float Type WH', 'Jaxon', 990, true, 'bobbers/jaxon-float-type-wh.jpg')
  ];

  private biteIndicators: BiteIndicator[] = [
    new BiteIndicator('MS-101000248', 'Delphin Hades', 'Delphin', 4990, true, 'bite-indicators/delphin-hades.jpg'),
    new BiteIndicator('ES-E27JY1', 'Eurostar Pull Up', 'Eurostar', 5990, true, 'bite-indicators/eurostar-pull-up.jpg'),
    new BiteIndicator('FX-CEI189', 'Fox Micron MX', 'Fox', 32990, false, 'bite-indicators/fox-micron-mx.jpg'),
    new BiteIndicator('JX-AJ-SYA109R', 'Jaxon Bite Alarm Feeder Pro', 'Jaxon', 3490, true, 'bite-indicators/jaxon-bite-alarm-feeder-pro.jpg'),
    new BiteIndicator('JX-AJ-SYA107R', 'Jaxon Bite XTR', 'Jaxon', 3990, true, 'bite-indicators/jaxon-bite-xtr.jpg'),
    new BiteIndicator('MF-AMS12-MB-G', 'Mikado M-Bite', 'Mikado', 13990, true, 'bite-indicators/mikado-m-bite.jpg'),
    new BiteIndicator('MF-M-SOEAR', 'Mivardi Easy Camo', 'Mivardi', 4990, false, 'bite-indicators/mivardi-easy-camo.jpg'),
    new BiteIndicator('MF-M-SO690Y', 'Mivardi M690', 'Mivardi', 8990, true, 'bite-indicators/mivardi-m690.jpg'),
    new BiteIndicator('EF-SNHC0-015', 'Sonik SKX Alarm', 'Sonik', 19900, true, 'bite-indicators/sonik-skx-alarm.jpg')
  ];

  constructor() { }

  getFishingRods(): FishingRod[] {
    return this.fishingRods;
  }

  getReels(): Reel[] {
    return this.reels;
  }

  getHooks(): Hook[] {
    return this.hooks;
  }

  getBobbers(): Bobber[] {
    return this.bobbers;
  }

  getBiteIndicators(): BiteIndicator[] {
    return this.biteIndicators;
  }
}
